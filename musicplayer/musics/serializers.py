from rest_framework import serializers
from musics.models import *


class MusicSerializer(serializers.ModelSerializer):
    artist = serializers.SlugRelatedField(many=True, slug_field="name", queryset=Artist.objects.all())
    album = serializers.SlugRelatedField(many=True, slug_field="album", queryset=Album.objects.all())

    class Meta:
        model = Music
        fields = ('song', 'artist', 'duration', 'album', 'genre', 'cover')


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Artist
        exclude = ()


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model=Album
        exclude = ()