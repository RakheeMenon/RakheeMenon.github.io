
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from forms import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^forms/', views.FormList.as_view()),
]

urlpatterns=format_suffix_patterns(urlpatterns)
