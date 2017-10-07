from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
#from .pagination import GetLimitOffsetPagination
from .models import Item_Master
from .models import Item_Category
from .models import Item_Sub_Category
from .serializers import ItemMasterSerializer
from .serializers import ItemCategorySerializer
from .serializers import ItemSubCategorySerializer
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

#View for ItemMaster
class ItemMasterList(APIView):
    def get(self, request, id=None):
        #import ipdb;ipdb.set_trace()
        #id= request.query_params['id']
        #if request.data['status'] == "Cancelled":
        #pagination_class=GetLimitOffsetPagination
        if id:
            obj_data=get_object_or_404(ItemMaster,id=id)
            many = False
        else:
            obj_data=ItemMaster.objects.all().order_by('itemName')
            many=True
            paginator = Paginator(obj_data,5)
            #paginator.count()
            page = request.GET.get('page')
            try:
                #import ipdb;ipdb.set_trace()
                obj_data = paginator.page(page)
            except PageNotAnInteger:
                    # If page is not an integer, deliver first page.
                obj_data = paginator.page(1)
            
        serializer = ItemMasterSerializer(obj_data, many=many)
        return Response(serializer.data, content_type="application/json")

    
    #def get(self, request, id=None):
    #    
    #    item_obj = ItemMaster.objects.get(id=id)
    #   serializer = ItemMasterSerializer(forms,many=False)
    #    return Response(serializer.data, content_type="application/json")
        
    #def get(self,request):
    #    forms = ItemMaster.objects.all()
    #   serializer=ItemMasterSerializer(forms,many=True)
    #   return Response(serializer.data, content_type="application/json") 
    
         
    def post(self, request):
       #import ipdb;ipdb.set_trace()
       serializer = ItemMasterSerializer(data=request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED) 
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST,content_type="application/json")


    def put(self, request,id):
        #import ipdb;ipdb.set_trace()
        #forms = self.get_object(pk)
        forms=ItemMaster.objects.get(id=id)
        serializer = ItemMasterSerializer(forms, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST,content_type="application/json")

    def delete(self, request, id):
        #import ipdb;ipdb.set_trace()
        forms=ItemMaster.objects.get(id=id)
        forms.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#View for ItemCategory
class ItemCategoryList(APIView):
    def post(self, request):
       #import ipdb;ipdb.set_trace()
       serializer = ItemCategorySerializer(data=request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED) 
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST,content_type="application/json")

#View for ItemSubCategory
class ItemSubCategoryList(APIView):
    def post(self, request):
       #import ipdb;ipdb.set_trace()
       serializer = ItemSubCategorySerializer(data=request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data, status=status.HTTP_201_CREATED) 
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST,content_type="application/json")


