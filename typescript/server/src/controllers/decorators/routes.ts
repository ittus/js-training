import 'reflect-metadata'

function routeBinder(method: string) {
  return function get(path: string) {
    return function(target: any, key: any, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = routeBinder('get')
export const put = routeBinder('put')
export const post = routeBinder('post')
export const del = routeBinder('del')
export const patch = routeBinder('patch')
