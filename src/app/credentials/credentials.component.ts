import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css'],
  providers: [ConfigService]
})
export class CredentialsComponent {
  credentialTypes: string[] = [];
  credentials: { [key: string]: boolean } = {};

  query: string = '';

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(config => {
      this.credentialTypes = config.credentialTypes;
      this.credentialTypes.forEach(type => this.credentials[type] = false);
    });
  }

  generateQuery() {
    const selectedCredentials = Object.keys(this.credentials)
      .filter(key => this.credentials[key] === true);

    if (selectedCredentials.length > 0) {
      this.query = `Select * From table1 Where CredentialType in (${selectedCredentials.map(cred => `'${cred}'`).join(', ')})`;
    } else {
      this.query = 'Select * From table1';
    }
  }
}
