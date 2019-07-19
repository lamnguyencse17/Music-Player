from rest_framework import routers
from .api import MusicViewSet, AlbumViewSet, ArtistViewSet

router = routers.DefaultRouter()
router.register('api/musics', MusicViewSet, 'musics')
router.register('api/artist', ArtistViewSet, 'artist')
router.register('api/album', AlbumViewSet, 'album')
urlpatterns = router.urls
