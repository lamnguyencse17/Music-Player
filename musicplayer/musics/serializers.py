from rest_framework import serializers
from musics.models import *


class MusicSerializer(serializers.ModelSerializer):
    artist = serializers.SlugRelatedField(many=True, slug_field="name", queryset=Artist.objects.all())
    album = serializers.SlugRelatedField(many=True, slug_field="album", queryset=Album.objects.all())
    """print(artist)"""
    """ for art in list(artist):
            print(artist)
            if not Artist.objects.filter(name=art):
                newartist = Artist(name=art)
                newartist.save() """
    """ def validate_artist(self, data):
        print(Artist.objects.filter(name=data))
        for artist in value:
            print(artist)
            if Artist.objects.filter(name=artist) == None:
                newartist = Artist(name=art)
                newartist.save()
        return data """
    """ def runthispls(self, value):
        for artist in value:
            newartist = Artist(name=artist)
            if Artist.objects.filter(name=artist) == None:
                newartist.save()
        print("first") """

    """ def create(self, validated_data):
        runthispls(validated_data.get('artist'))
        print("sec")
        print(Artist.objects.filter(name=validated_data.get('artist')[0]))
        newsong = Music.objects.create(
            song=validated_data.get('song'),
            duration=validated_data.get('duration'),
            genre=validated_data.get('genre')
        )
        newsong.save()
        for artist in validated_data.get('artist'):
            newartist = Artist(name=artist)
            if Artist.objects.filter(name=artist) == None:
                newartist.save()
            newsong.artist.add(newartist)
        return validated_data """

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