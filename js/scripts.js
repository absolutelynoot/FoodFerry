// Use this file to add JavaScript to your project

// popovers
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })

            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })

            var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
                container: 'body'
            })

            var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
                trigger: 'focus'
            })



