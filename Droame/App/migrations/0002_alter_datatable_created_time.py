# Generated by Django 3.2.4 on 2023-03-27 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datatable',
            name='created_time',
            field=models.TimeField(),
        ),
    ]
