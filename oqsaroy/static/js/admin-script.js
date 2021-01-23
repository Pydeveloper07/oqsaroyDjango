$(document).ready(function(){
    $('input.check-control').change(function(){
        var type = $(this).attr('data-type');
        var csrf = $(this).attr('data-csrf');
        var isChecked = $(this).prop('checked');
        var data = {};
        var url = $(this).attr('data-url');
        switch(type){
            case 'building':
                data = {
                    'type': type,
                    'building_label': $(this).attr('data-buildingLabel'),
                    'is_checked': isChecked,
                    'csrfmiddlewaretoken': csrf
                }
            case 'floor':
                data = {
                    'type': type,
                    'building_label': $(this).attr('data-buildingLabel'),
                    'floor_number': $(this).attr('data-floorNumber'),
                    'is_checked': isChecked,
                    'csrfmiddlewaretoken': csrf
                }
            case 'apartment':
                data = {
                    'type': type,
                    'building_label': $(this).attr('data-buildingLabel'),
                    'floor_number': $(this).attr('data-floorNumber'),
                    'apartment_number': $(this).attr('data-apartmentNumber'),
                    'is_checked': isChecked,
                    'csrfmiddlewaretoken': csrf
                }
        }
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: 'json',
            success: function(response){
                if (response.success){
                    alert('Successfully updated!');
                }
                else{
                    alert('Something went wrong! Try again!');
                }
            },
            error: function(){
                alert('Something went wrong! Try again!');
            }
        });
    });
});