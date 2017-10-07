from rest_framework import serializers 
from .models import Item_Master
from .models import Item_Category
from .models import Item_Sub_Category


class ItemMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item_Master
        fields=('id','itemName','drawingNo','grpId','catId','subId')




class ItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Item_Category
        fields = ('id','itemCategory')


class ItemSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Item_Sub_Category
        fields = ('id','itemSubCategory')
