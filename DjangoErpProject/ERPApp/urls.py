from django.conf.urls import url
from ERPApp import views

#urlpatterns = [
    # /forms/
 #   url(r'^$',views.index,name='index'),

    # /forms/45/
  #  url(r'^(?P<itemMaster_id>[0-9]+)/$',views.detail,name='detail'),
#]

urlpatterns = [
    
    url(r'^itemmaster/$', views.ItemMasterList.as_view()),
    url(r'^itemcat/$',views.ItemCategoryList.as_view()),
    #url(r'^/(?P<year>\d{4})/$', views.FormList.as_view()),
    url(r'^itemsubcat/$',views.ItemSubCategoryList.as_view()),
    url(r'^itemmaster/(?P<id>[0-9]+)/$',views.ItemMasterList.as_view()),
    
    
    ]