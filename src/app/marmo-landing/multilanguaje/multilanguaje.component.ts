import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multilanguaje',
  templateUrl: './multilanguaje.component.html',
  styleUrls: ['./multilanguaje.component.scss']
})
export class MultilanguajeComponent implements OnInit {

  isJava: boolean = true;
  isJavascript: boolean = false;
  isPython: boolean = false;
  statusJava: boolean = true;
  statusJavascript: boolean = false;
  statusPython: boolean = false;

  encoded = "import { Provider } from 'marmojs';const ethNode = 'https://ropsten.node.rcn.loans:8545/';\nconst relayer = 'http://ec2-18-188-99-203.us-east-2.compute.amazonaws.com/';provider = new Provider(ethNode, relayer);";

  constructor() { }

  toggleJava(){
    this.isJava = true
    this.isJavascript = false
    this.isPython = false
    this.statusJava = true
    this.statusJavascript = false
    this.statusPython = false
  }

  toggleJavascript(){
    this.isJava = false
    this.isJavascript = true
    this.isPython = false
    this.statusJava = false
    this.statusJavascript = true
    this.statusPython = false
  }

  togglePython(){
    this.isJava = false
    this.isJavascript = false
    this.isPython = true
    this.statusJava = false
    this.statusJavascript = false
    this.statusPython = true
  }


  ngOnInit() {
  }

}
