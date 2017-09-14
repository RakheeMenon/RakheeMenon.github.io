from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ItemMaster
from .serializers import ItemMasterSerializer
from django.shortcuts import get_object_or_404


class FormList(APIView):
    def get(self, request, id=None):
        import ipdb;ipdb.set_trace()
        if id:
            obj_data=get_object_or_404(ItemMaster,id=id)
            many=False
        else:
            obj_data=ItemMaster.objects.all()
            many=True
        
        serializer = ItemMasterSerializer(obj_data,many=many)
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
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def put(self, request):
        import ipdb;ipdb.set_trace()
        #forms = self.get_object(pk)
        
        serializer = ItemMasterSerializer(forms, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #def delete(self, request, pk, format=None):
     #   forms = self.get_object(pk)
      #  forms.delete()
       # return Response(status=status.HTTP_204_NO_CONTENT)

    
      