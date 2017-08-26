from rest_framework import serializers 
from .models import ItemMaster

class ItemMasterSerializer(serializers.ModelSerializer):
    class Meta:
        model=ItemMaster
        fields=('itemName','itemNo','itemDescription','itemGroup')