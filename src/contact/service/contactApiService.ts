import { ContactFormState, ContactModel } from "../model/contactModel";
import axios, { AxiosResponse } from "axios";

export class ContactApiService {
  static url = "/v1/contacts";

  static findAll(): Promise<AxiosResponse<ContactModel[]>> {
    return axios.get(this.url);
  }

  static findById(id: number): Promise<AxiosResponse<ContactModel>> {
    return axios.get(`${this.url}/${id}`);
  }

  static createContact(body: ContactFormState) {
    return axios.post(this.url, body);
  }

  static replaceContact(id: number, body: ContactFormState) {
    return axios.put(`${this.url}/${id}`, body);
  }

  static deleteById(id: number) {
    return axios.delete(`${this.url}/${id}`);
  }
}
