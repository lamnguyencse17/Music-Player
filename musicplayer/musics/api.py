from musics.models import *
from rest_framework import viewsets, permissions
from .serializers import MusicSerializer, ArtistSerializer, AlbumSerializer

class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MusicSerializer
    

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