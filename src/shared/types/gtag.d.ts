export {};

declare global {
  interface Window {
    gtag: GtagFunction;
  }

  type GtagFunction = {
    (command: "js", config: Date): void;
    (command: "config", trackingId: string, config?: GtagConfig): void;
    (command: "event", eventName: string, eventParams?: GtagEventParams): void;
  };

  interface GtagConfig {
    page_path?: string;
    anonymize_ip?: boolean;
    send_page_view?: boolean;
    [key: string]: string | number | boolean | undefined;
  }

  interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: string | number | boolean | undefined;
  }
}
