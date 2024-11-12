import type { CourseData } from "./types";

export class Canvas {
  private apiKey: string;
  canvasURl: URL;
  constructor(key: string, canvasUrl?: URL) {
    this.apiKey = key;
    this.canvasURl = canvasUrl || new URL("");
  }
  private async request(
    input: RequestInfo | URL,
    args?: RequestInit
  ): Promise<Response> {
    return fetch(input, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        ...args?.headers,
      },
      ...args,
    });
  }

  // Dashbaord / course related
  async dashboardCards() {
    try {
      const res = await this.request(
        `${this.canvasURl.href}api/v1/dashboard/dashboard_cards`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCourses(): Promise<CourseData[]> {
    try {
      const res = await this.request(`${this.canvasURl.href}api/v1/courses`);
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAssignments(courseID: string) {
    try {
      const res = await this.request(
        `${this.canvasURl.href}api/v1/courses/${courseID}/assignments`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getModules(courseID: string) {
    try {
      const res = await this.request(
        `${this.canvasURl.href}api/v1/courses/${courseID}/modules`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
