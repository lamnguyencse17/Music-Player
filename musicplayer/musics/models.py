from django.db import models
from .choices import *


class Album(models.Model):
    name = models.CharField(max_length=100, default="Unknown Album")
    date = models.DateTimeField("Release Date", auto_now=False, auto_now_add=False, blank=True, null=True, default=None)

    def __str__(self):
        return self.album

class Artist(models.Model):
    name = models.CharField(max_length=100, default="Unknown Artist")

    def __str__(self):
        return self.name
    

class Music(models.Model):
    song = models.CharField(max_length=100, default="Unknown Song")
    artist = models.ManyToManyField(Artist, related_name="performs")
    duration = models.IntegerField(default=0)
    album = models.ManyToManyField(Album, null = True, blank = True, default=None, related_name="includes")
    genre = models.IntegerField(choices=GENRE_CHOICES, default=1)
    cover = models.ImageField(upload_to = 'cover/', null = True, blank = True, default=None)

    def __str__(self):
        return self.song
