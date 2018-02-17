$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    $.extend($.fn.dataTable.defaults, {
        autoWidth: false,
        // columnDefs: [{
        //     orderable: false,
        //     width: '100px',
        //     targets: [5]
        // }],
        dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
        language: {
            search: '<span>חיפוש:</span> _INPUT_',
            searchPlaceholder: 'הקלד כדי לחפש...',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: {
                'first': 'First',
                'last': 'Last',
                'next': '&larr;',
                'previous': '&rarr;'
            }
        }
    });


    // Column selector
    $('.datatable-autofill-column').DataTable({
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }, ],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        order: [
            [1, 'asc']
        ],
        ajax: {
            url: window.config.base_url + 'marketing/leads/list',
            type: 'GET',
            data: {},
            dataSrc: function(res) {
                return res;
            },
        },
        columns: [{
                data: 'id',
                render: function(data, meta, row) {
                    return '';
                }
            },
            {
                data: 'first_name'
            },
            {
                data: 'last_name'
            },
            {
                data: 'email'
            },
            {
                data: 'phone',
            },
            {
                data: 'id',
                render: function(data, meta, row) {
                    return `<ul class="icons-list">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i class="icon-menu9"></i>
                                    </a>

                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li><a href="#"><i class="icon-file-pdf"></i> Export to .pdf</a></li>
                                        <li><a href="#"><i class="icon-file-excel"></i> Export to .csv</a></li>
                                        <li><a href="#"><i class="icon-file-word"></i> Export to .doc</a></li>
                                    </ul>
                                </li>
                            </ul>`;
                }
            },
        ]
    });



    // External table additions
    // ------------------------------

    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto'
    });

});