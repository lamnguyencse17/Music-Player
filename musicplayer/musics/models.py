from django.db import models
from .choices import *
import uuid


class Album(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, default="Unknown Album")
    date = models.DateTimeField("Release Date", auto_now=False, auto_now_add=False, blank=True, null=True, default=None)
    cover = models.ImageField(upload_to = 'cover/', null = True, blank = True, default=None)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.title()
        super().save(*args, **kwargs)

class Artist(models.Model):
    name = models.CharField(max_length=100, default="Unknown Artist")

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.name = self.name.title()
        super().save(*args, **kwargs)

class Music(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    song = models.CharField(max_length=100, default="Unknown Song")
    artist = models.ManyToManyField(Artist, related_name="performs")
    duration = models.IntegerField(default=0)
    album = models.ManyToManyField(Album, null = True, blank = True, default=None, related_name="includes")
    genre = models.IntegerField(choices=GENRE_CHOICES, default=1)
    source = models.FileField(blank = False, null=False)

    def __str__(self):
        return self.song
    
    def save(self, *args, **kwargs):
        self.song = self.song.title()
        super().save(*args, **kwargs)
