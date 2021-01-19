import { Project, Size } from "./types";

export class CoreApi {
  constructor(public baseUrl: string) {
  }
}

export type BaseApiConstructor = new (...args: any[]) => CoreApi;

function ImagesApi<TBase extends BaseApiConstructor>(Base: TBase) {
  return class extends Base {
    getImages(): Promise<{
      src: string;
      dimensions: Size;
    }> {
      return Promise.resolve({
        src: "http://a-fake-url.com/image-id",
        dimensions: {
          height: 100,
          width: 300
        }
      });
    }
  
    saveImage(src: string): Promise<number> {
      return Promise.resolve(10);
    }
  }
}

function ProjectsApi<TBase extends BaseApiConstructor>(Base: TBase) {
  return class extends Base {
    getProjects(): Promise<Project[]> {
      return Promise.resolve([]);
    }
  
    saveProject(): Promise<string> {
      return Promise.resolve("1");
    }
  
    deleteProject(): Promise<void> {
      return Promise.resolve();
    }
  }
}

class ApiClient extends ProjectsApi(ImagesApi(CoreApi)) {

}

const api = new ApiClient("http://pluralsight.com");

// api.
