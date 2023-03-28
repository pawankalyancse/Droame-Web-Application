from django.db import models

# Create your models here.

class DataTable(models.Model):
    customer_id = models.CharField(max_length=100)
    customer_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.BigIntegerField()
    booking_id = models.CharField(max_length=100)
    location_id = models.CharField(max_length=100)
    drone_shot_id = models.CharField(max_length=100)
    created_time = models.TimeField()