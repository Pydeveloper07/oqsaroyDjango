$(window).load(function(){
    function preLoader(){
        $('#preloader').fadeOut('slow');
        $('body').css({
            'overflow-y': 'scroll'
        });
    }
    if (!sessionStorage.getItem( 'doNotShow')) {
        sessionStorage.setItem('doNotShow', true);
        preLoader();
    } else {
        $('#preloader').hide();
        $('body').css({
            'overflow-y': 'scroll'
        });
    }
});
$(document).ready(function () {
    $('.section-planirovka').mousemove(function(e){
        var relX = e.pageX - $(this).offset().left;
        var relY = e.pageY - $(this).offset().top;
        $('svg.main .st0.unavailable').mousemove(function(){
            $('.section-planirovka .block-alert').css({
                'display': 'block',
                'left': relX + 10,
                'top': relY - 50
            });
        });
        $('svg.main .st0.unavailable').mouseout(function(){
            $('.section-planirovka .block-alert').css({
                'display': 'none'
            });
        });
    });
    $('body').scrollspy({ target: '#indexSidebar' });
    $('#indexSidebar .nav-link.active').css('color', '#48dbbe');
    $('#indexSidebar .nav-link.active').siblings('.nav-item-indicator').css({'background':'rgba(32, 121, 255, 0.3)'});
    $('#indexSidebar .nav-link.active').siblings('.nav-item-indicator').find('.layer-1').css({'background':'rgba(32, 121, 255, 0.5)'});
    $(window).scroll(function(){
        $('#indexSidebar .nav-link').each(function(){
            if ($(this).hasClass('active')){
                $(this).css('color', '#48dbbe');
                $(this).siblings('.nav-item-indicator').css({'background':'rgba(32, 121, 255, 0.3)'});
                $(this).siblings('.nav-item-indicator').find('.layer-1').css({'background':'rgba(32, 121, 255, 0.5)'});
            }
            else{
                $(this).css('color', 'rgba(25, 42, 57, 1)');
                $(this).siblings('.nav-item-indicator').css({'background':'none'});
                $(this).siblings('.nav-item-indicator').find('.layer-1').css({'background':'none'});
            }
        });
    });
    $('#openMap').click(function() {
        $('.map-alt').fadeIn(200);
    });
    $('#closeMap').click(function() {
        $('.map-alt').fadeOut(200);
    });
    if ($(window).width() >= 320 && $(window).width() <= 520){
        var top = $('.planirovka-top-mobile').css('height');
        $('.map-alt').css({'top': top});
    }
    $('#floorUp').click(function () {
        let max = $('.building .st0').length;
        let currValue = $('#bFloorLvlIndicator').attr('data-value');
        if (currValue < max){
            currValue++;
            $('#bFloorLvlIndicator').attr('data-value', currValue);
            $('#bFloorLvlIndicator').text(currValue.toString());
            updateFloorInfo(currValue);
        }
    });
    $('#floorDown').click(function () {
        let currValue = $('#bFloorLvlIndicator').attr('data-value');
        if (currValue > 0){
            currValue--;
            $('#bFloorLvlIndicator').attr('data-value', currValue);
            if (currValue == 0){
                $('#bFloorLvlIndicator').text("-");
            }
            else{
                $('#bFloorLvlIndicator').text(currValue.toString());
            }
            updateFloorInfo(currValue);
        }
    });
    $('#roomNext').click(function () {
        let max = $('svg.floor .st0').length;
        let currValue = $('#fRoomIndicator').attr('data-value');
        if (currValue < max){
            currValue++;
            $('#fRoomIndicator').attr('data-value', currValue);
            $('#fRoomIndicator').text(currValue.toString());
            updateRoomInfo(currValue);
        }
    });
    $('#roomPrev').click(function () {
        let currValue = $('#fRoomIndicator').attr('data-value');
        if (currValue > 0){
            currValue--;
            $('#fRoomIndicator').attr('data-value', currValue);
            if (currValue == 0){
                $('#fRoomIndicator').text("-");
            }
            else{
                $('#fRoomIndicator').text(currValue.toString());
            }
            updateRoomInfo(currValue);
        }
    });
    function updateFloorInfo(floor){
        let btn = $('#exploreFloor');
        if (floor != 0){
            let element = $(`svg.building .st0[data-floor=${floor}]`);
            let numberOfApartments = element.attr('data-avalApartments');
            if (numberOfApartments == 0){
                btn.addClass('disabled');
            }
            else{
                btn.removeClass('disabled');
                btn.attr('data-url', element.attr('data-url'));
            }
            $('#apartmentsAvailable').text(numberOfApartments.toString());
        }
        else{
            $('#apartmentsAvailable').text("-");
            btn.addClass('disabled');
        }
    }
    function updateRoomInfo(room){
        let btn = $('#exploreRoom');
        if (room != 0){
            let element = $(`svg.floor .st0[data-room=${room}]`);
            let numberOfRooms = element.attr('data-rooms');
            let totArea = element.attr('data-totArea');
            let totAreaRooms = element.attr('data-totAreaRooms');
            if (element.attr('class').indexOf('unavailable') !== -1){
                btn.addClass('disabled');
            }
            else{
                btn.removeClass('disabled');
                btn.attr('data-url', element.attr('data-url'));
            }
            $('#roomNum').text(numberOfRooms.toString());
            $('#totAreaApartment').text(totArea.toString());
            $('#totAreaRooms').text(totAreaRooms.toString());
        }
        else{
            $('#roomNum').text("-");
            $('#totAreaApartment').text("-");
            $('#totAreaRooms').text("-");
            btn.addClass('disabled');
        }
    }
    $('#exploreFloor').click(function() {
        if ($(this).hasClass('disabled')){
            return;
        }
        window.location.href = $(this).attr('data-url');
    });
    $('#exploreRoom').click(function() {
        if ($(this).hasClass('disabled')){
            return;
        }
        window.location.href = $(this).attr('data-url');
    });
    $(window).on('resize', function(){
        if ($(window).width() <= 1100){
            console.log('hello');
            $('.section').css({'padding-top':$('.top-nav').css('height') + 'px'});
        }
    });
    $('.top-nav .toggler').click(function() {
        if ($('#sidebar').width() == 0){
            var width;
            if ($(window).width() < 700 && $(window).width() > 600){
                width = "50%";
            }
            else if ($(window).width() <= 600){
                width = "100%";
            }
            else{
                width = "30%";
            }
            $('#sidebar').css({'width': width});
            $('#sidebar button.close').css({'display':'block'});
        }
        else{
            $('#sidebar').css({'width': 0});
        }
    });
    $('#sidebar .close').click(function() {
        $('#sidebar').css({'width':'0'});
    });
    $('svg.main .st0').click(function () {
        if ($(this).attr('class').indexOf('unavailable') !== -1){
            return;
        }
        else{
            var url = $(this).attr('data-url');
            window.location.href = url;
        }
    });
    $('svg.building .st0').mouseover(function () {
        var floorLvl = $(this).attr('data-floor');
        var avalApartments = $(this).attr('data-avalApartments');
        $('#bFloorLvlIndicator').text(floorLvl);
        $('#apartmentsAvailable').text(avalApartments);
    });
    $('svg.building .st0').click(function(){
        if ($(this).attr('class').indexOf('unavailable') !== -1){
            return;
        }
        else{
            var url = $(this).attr('data-url');
            window.location.href = url;
        }
    });
    $('svg.floor .st0').mouseover(function(){
        var roomNum = $(this).attr('data-rooms');
        var totArea = $(this).attr('data-totArea');
        var totAreaRooms = $(this).attr('data-totAreaRooms');
        $('#roomNum').text(roomNum);
        $('#totAreaApartment').text(totArea);
        $('#totAreaRooms').text(totAreaRooms);
    });
    $('.apartment-indicator .ctrl-btns button').click(function(){
        if (!$(this).hasClass('active')){
            $('.ctrl-btns button').toggleClass('active');
            var imgElem = $('#imgApartment')
            var imgUrl = $(this).attr('data-imgUrl');
            imgElem.attr('src', imgUrl)
        }
    });
    $('svg.floor .st0').click(function(){
        if ($(this).attr('class').indexOf('unavailable') !== -1){
            return;
        }
        else{
            window.location.href = $(this).attr('data-url');
        }
    });
    $('#mapBuildings .st0').click(function () {
        if ($(this).attr('class').indexOf('unavailable') !== -1){
            return;
        }
        var url = $(this).attr('data-url');
        window.location.href = url;
    });
    $('.back-arrow').click(function(){
        window.history.back();
    });
    $('#floorNavigator .floor-nav-item').click(function(){
        if ($(this).hasClass('item-active') || $(this).hasClass('item-unavailable') || !$(this).attr('data-url')){
            return;
        }
        window.location.href = $(this).attr('data-url');
    });
});