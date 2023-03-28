from django.shortcuts import render
from .models import DataTable


def home(request):
    data = DataTable.objects.all()
    return render(request, 'home.html', {'data': data})


def create(request):
    customer_id = request.POST['customer_id']
    customer_name = request.POST['customer_name']
    email = request.POST['email']
    phone_number = request.POST['phone_number']
    booking_id = request.POST['booking_id']
    location_id = request.POST['location_id']
    drone_shot_id = request.POST['drone_shot_id']
    created_time = request.POST['created_time']

    DataTable.objects.create(customer_id=customer_id, customer_name=customer_name,
                             email=email, phone_number=phone_number,
                             booking_id=booking_id, location_id=location_id,
                             drone_shot_id=drone_shot_id, created_time=created_time)

    data = DataTable.objects.all()

    return render(request, 'home.html', {'data': data})


def delete(request):
    pk = request.POST['pk']

    DataTable.objects.filter(pk=pk).delete()

    data = DataTable.objects.all()

    return render(request, 'home.html', {'data': data})


def edit(request):
    pk = request.POST['pk']
    customer_id = request.POST['customer_id']
    customer_name = request.POST['customer_name']
    email = request.POST['email']
    phone_number = request.POST['phone_number']
    booking_id = request.POST['booking_id']
    location_id = request.POST['location_id']
    drone_shot_id = request.POST['drone_shot_id']
    created_time = request.POST['created_time']

    DataTable.objects.filter(pk=pk).update(customer_id=customer_id, customer_name=customer_name,
                             email=email, phone_number=phone_number,
                             booking_id=booking_id, location_id=location_id,
                             drone_shot_id=drone_shot_id,created_time=created_time)

    data = DataTable.objects.all()

    return render(request, 'home.html', {'data': data})

