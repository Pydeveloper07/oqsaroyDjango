from django.contrib import admin
from django.urls import path
from django.urls import include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include("index.urls")),
    path('planirovka/', include("planirovka.urls")),
    path('admin/', admin.site.urls),
    path('cadmin/', include('custom_admin.urls'))
]   

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)