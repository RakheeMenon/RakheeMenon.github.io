from django.db import models
#Item Master Table
class Item_Master(models.Model):
    itemName = models.CharField(max_length=50)
    drawingNo = models.IntegerField(default=100)
    grpId = models.IntegerField(default=50)
    catId = models.IntegerField(default=100)
    subId = models.IntegerField(default=100)
    
    def __str__(self):
        return self.itemName


#Item Category Table
class Item_Category(models.Model):
    itemCategory = models.CharField(max_length=90)
    
    def __str__(self):
        return self.itemCategory

#Item Sub-Category Table
class Item_Sub_Category(models.Model):
    itemSubCategory = models.CharField(max_length=100)

    def __str__(self):
        return self.itemSubCategory



