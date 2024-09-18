

export type CreateUserParams = {
    name: string;
    phoneNumber: string;
    dateOfBirth: string;
    gender: string;
    type: 'CMS' | 'CLIENT';
    status: 0 | 1;
}

export type UpdateUserParams = {
    name?: string;
    phoneNumber?: string;
    dateOfBirth?: string;
    gender?: string;
    type?: 'CMS' | 'CLIENT';
    status?: 0 | 1;
  }