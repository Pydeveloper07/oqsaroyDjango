# Generated by Django 2.2.5 on 2021-01-23 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planirovka', '0004_auto_20210103_0939'),
    ]

    operations = [
        migrations.AlterField(
            model_name='building',
            name='template',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='floor',
            name='template',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
