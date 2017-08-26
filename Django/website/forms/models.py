from django.db import models

class ItemMaster(models.Model):
    itemName=models.CharField(max_length=50)
    itemNo=models.CharField(max_length=30)
    itemDescription=models.CharField(max_length=45)
    itemGroup=models.CharField(max_length=50)

    def __str__(self):
        return self.itemName

