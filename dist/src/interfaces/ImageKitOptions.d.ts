import { TransformationPosition } from ".";
export interface ImageKitOptions {
    urlEndpoint: string;
    sdkVersion?: string;
    publicKey?: string;
    authenticationEndpoint?: string;
    authenticationEndpointHeaders?: {
        [key: string]: string;
    };
    transformationPosition?: TransformationPosition;
}
