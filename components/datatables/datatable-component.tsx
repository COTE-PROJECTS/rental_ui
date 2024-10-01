'use client';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState, Fragment } from 'react';
import sortBy from 'lodash/sortBy';
import IconFile from '@/components/icon/icon-file';
import IconPrinter from '@/components/icon/icon-printer';
import IconPlusCircle from '../icon/icon-plus-circle';

const DatatableComponent = ({ rowData, cols, onAdd, addLabel = "ADD ITEM", exportCols }: { rowData?: any[], addLabel?: string; onAdd?: () => void; exportCols?: string[]; cols?: any[] }) => {
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [sortedRecords, setSortedRecords] = useState(initialRecords); // New sorted state
    const [recordsData, setRecordsData] = useState(sortedRecords); // Use sorted records for display

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setSortedRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [initialRecords, sortStatus]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...sortedRecords.slice(from, to)]);
    }, [page, pageSize, sortedRecords]);

    useEffect(() => {
        setRecordsData(() => {
            return sortedRecords.filter((item: any) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.company.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.dob.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search, sortedRecords]);

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const exportTable = (type: any) => {
        let columns: any = exportCols;
        let records = rowData;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            (records ?? []).map((item: any) => {
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';
            (records ?? []).map((item: any) => {
                rowhtml += '<tr>';
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            (records ?? []).map((item: any) => {
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
    return (
        <div className="panel mt-6">
            <div className="mb-4.5 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div className="flex flex-wrap items-center">
                    <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                        <IconFile className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                        CSV
                    </button>
                    <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                        <IconFile className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                        TXT
                    </button>

                    <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                        <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                        PRINT
                    </button>
                </div>

                <div className='flex flex-row justify-between'>
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type="button" onClick={onAdd} className="btn btn-primary btn-sm mx-2">
                        <IconPlusCircle className="ltr:mr-2 rtl:ml-2" />
                        {addLabel}
                    </button>
                </div>
            </div>
            <div className="datatables">
                <DataTable
                    highlightOnHover
                    className="table-hover whitespace-nowrap"
                    records={recordsData}
                    columns={cols ?? []}
                    // columns={
                    //     [
                    //     { accessor: 'id', title: '#', sortable: true },
                    //     { accessor: 'firstName', sortable: true },
                    //     { accessor: 'lastName', sortable: true },
                    //     { accessor: 'company', title: 'Company', sortable: true },
                    //     { accessor: 'age', title: 'Age', sortable: true },
                    //     {
                    //         accessor: 'dob',
                    //         title: 'Start Date',
                    //         sortable: true,
                    //         render: ({ dob }) => <div>{formatDate(dob)}</div>,
                    //     },
                    //     { accessor: 'email', sortable: true },
                    //     { accessor: 'phone', sortable: true },
                    // ]}
                    totalRecords={initialRecords.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>

        </div>
    );
};

export default DatatableComponent;
