from django.db import models
from .choices import *

class Music(models.Model):
    song = models.CharField(max_length=100, default="Unknown Song")
    artist = models.ManyToManyField(Artist, on_delete=models.CASCADE, null = True, blank = True, default=None)
    duration = models.IntegerField(default=0)
    album = models.ManyToManyField(Album, on_delete=models.CASCADE, null = True, blank = True, default=None)
    genre = models.IntegerField(choices=GENRE_CHOICES, default=1)
    cover = models.ImageField(upload_to = 'cover/', null = True, blank = True, default=None )


class Album(models.Model):
    album = models.CharField(max_length=100, default="Unknown Album")
    date = models.DateTimeField(_("Release Date"), auto_now=False, auto_now_add=False, blank=True, null=True, default=None)


class Artist(models.Model):
    name = models.CharField(max_length=100, default="Unknown Artist")

    