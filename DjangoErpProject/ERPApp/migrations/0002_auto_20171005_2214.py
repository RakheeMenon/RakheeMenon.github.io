# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-10-05 16:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ERPApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='itemmaster',
            name='isActive',
        ),
        migrations.RemoveField(
            model_name='itemmaster',
            name='itemDescription',
        ),
        migrations.RemoveField(
            model_name='itemmaster',
            name='itemGroup',
        ),
        migrations.RemoveField(
            model_name='itemmaster',
            name='itemNo',
        ),
        migrations.AddField(
            model_name='itemmaster',
            name='drawingNo',
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name='itemmaster',
            name='grpId',
            field=models.IntegerField(default=50),
        ),
    ]
