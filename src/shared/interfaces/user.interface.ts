export interface User {
    id: string
    img_url: string
    name: string | ''
    email: string | ''
    phone_no: string
    address1?: string
    address2?: string
    address3?: string
}
