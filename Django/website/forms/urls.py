from django.conf.urls import url
from forms import views

#urlpatterns = [
    # /forms/
 #   url(r'^$',views.index,name='index'),

    # /forms/45/
  #  url(r'^(?P<itemMaster_id>[0-9]+)/$',views.detail,name='detail'),
#]

urlpatterns = [
    
    url(r'^$', views.FormList.as_view()),
    #url(r'^/(?P<year>\d{4})/$', views.FormList.as_view()),
    url(r'^(?P<id>[0-9]+)/$',views.FormList.as_view()),
    
    ]