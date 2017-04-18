import {UIChart} from 'primeng/primeng';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
	templateUrl: 'app/pie/piechartstaff.html',
	selector: 'my-app',
    directives: [UIChart],
	providers: [HTTP_PROVIDERS]
})
export class PieChartstaff {

    data: any;

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            };
    }
}
