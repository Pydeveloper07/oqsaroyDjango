# Generated by Django 2.2.5 on 2021-01-02 14:40

from django.db import migrations, models
import planirovka.models


class Migration(migrations.Migration):

    dependencies = [
        ('planirovka', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apartment',
            name='image_3d',
            field=models.ImageField(blank=True, null=True, upload_to=planirovka.models.image_3d_upload_path),
        ),
    ]
