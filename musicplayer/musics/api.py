from musics.models import *
from rest_framework.response import Response
from rest_framework import status, viewsets, permissions
from .serializers import MusicSerializer, ArtistSerializer, AlbumSerializer
from rest_framework.parsers import MultiPartParser, FormParser

class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MusicSerializer
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request):
        serializer = MusicSerializer(data=request.data)
        for artist in serializer.initial_data.getlist('artist'):
            Artist.objects.get_or_create(name=artist.title())
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ArtistSerializer


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer