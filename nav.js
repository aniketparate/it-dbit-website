
(function($bs) {
    const CLASS_NAME = 'has-child-dropdown-show';
        $bs.Dropdown.prototype.toggle = function(_orginal) {
            return function() {
                document.querySelectorAll('.' + CLASS_NAME).forEach(function(e) {
                    e.classList.remove(CLASS_NAME);
                });
                let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
                for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                    dd.classList.add(CLASS_NAME);
                }
                return _orginal.call(this);
            }
        }($bs.Dropdown.prototype.toggle);

        document.querySelectorAll('.dropdown').forEach(function(dd) {
            dd.addEventListener('hide.bs.dropdown', function(e) {
                if (this.classList.contains(CLASS_NAME)) {
                    this.classList.remove(CLASS_NAME);
                    e.preventDefault();
                }
                if(e.clickEvent && e.clickEvent.composedPath().some(el=>el.classList && el.classList.contains('dropdown-toggle'))){
                    e.preventDefault();
                }
                e.stopPropagation(); // do not need pop in multi level mode
            });
        });

        // for hover
        function getDropdown(element) {
            return $bs.Dropdown.getInstance(element) || new $bs.Dropdown(element);
        }

        document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function(dd) {
            dd.addEventListener('mouseenter', function(e) {
                let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                if (!toggle.classList.contains('show')) {
                    getDropdown(toggle).toggle();
                }
            });
            dd.addEventListener('mouseleave', function(e) {
                let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                if (toggle.classList.contains('show')) {
                    getDropdown(toggle).toggle();
                }
            });
        });
    })(bootstrap);

    var expandCollapse = function(){
        if ( $(window).width() > 1200 ) {
            $(function(){
                $('.drop-down').removeAttr('data-bs-toggle');
                // $('.drop-down').removeAttr('data-bs-popper');
                console.log(1)
                // // add a class .collapse to a div .showHide
                // $('.showHide').addClass('collapse');
                // // set display: "" in css for the toggle button .btn.btn-primary
                // $('button.btn.btn-primary').css('display', '');// removes display property to make it visible
            });
        }
        // else {
        //     $(function(){
        //         // remove a class .collapse from a div .showHide
        //         $('.showHide').removeClass('collapse');
        //         // set display: none in css for the toggle button .btn.btn-primary  
        //         $('button.btn.btn-primary').css('display', 'none');// hides button display on bigger screen
        //     });
        // }
    }
    $(window).resize(expandCollapse); // calls the function when the window first loads