import { ImageKitOptions, UploadResponse } from "../interfaces";
import IKResponse from "../interfaces/IKResponse";
interface SignatureResponse {
    signature: string;
    expire: number;
    token: string;
}
export declare const request: (uploadFileXHR: XMLHttpRequest, formData: FormData, options: ImageKitOptions & {
    authenticationEndpoint: string;
}, callback?: ((err: Error | null, response: UploadResponse | null) => void) | undefined) => void;
export declare const generateSignatureToken: (authenticationEndpoint: string, authenticationEndpointHeaders?: {
    [key: string]: string;
} | undefined) => Promise<SignatureResponse>;
export declare const uploadFile: (uploadFileXHR: XMLHttpRequest, formData: FormData) => Promise<IKResponse<UploadResponse> | Error>;
export {};
