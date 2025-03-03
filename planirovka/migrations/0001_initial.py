# Generated by Django 2.2.5 on 2021-01-01 12:34

from django.db import migrations, models
import django.db.models.deletion
import planirovka.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Building',
            fields=[
                ('building_label', models.CharField(max_length=1, primary_key=True, serialize=False)),
                ('available', models.BooleanField(default=True)),
                ('image', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Floor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('floor_number', models.IntegerField()),
                ('available', models.BooleanField(default=True)),
                ('image', models.CharField(max_length=100)),
                ('building', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='floors', to='planirovka.Building')),
            ],
        ),
        migrations.CreateModel(
            name='Apartment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('apartment_number', models.IntegerField()),
                ('number_of_rooms', models.IntegerField()),
                ('tot_area', models.FloatField()),
                ('tot_area_rooms', models.FloatField()),
                ('available', models.BooleanField(default=True)),
                ('image', models.ImageField(upload_to=planirovka.models.image_upload_path)),
                ('image_3d', models.ImageField(upload_to=planirovka.models.image_3d_upload_path)),
                ('floor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='rooms', to='planirovka.Floor')),
            ],
        ),
    ]
