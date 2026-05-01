import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

export function ApiLogin() {
  return applyDecorators(
    ApiOperation({
      summary: 'Iniciar sesión',
      description: 'Autentica un usuario con su documento y contraseña, retornando un token JWT'
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          document: {
            type: 'string',
            description: 'Número de documento del usuario',
            example: '1234567890'
          },
          password: {
            type: 'string',
            description: 'Contraseña del usuario',
            example: 'password123'
          }
        },
        required: ['document', 'password']
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Inicio de sesión exitoso',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Inicio de sesion exitoso',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Usuario no encontrado',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'No existe ningun usuario con este numero de documento'
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Contraseña incorrecta',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Contraseña incorrecta'
        }
      }
    })
  );
}

export function ApiRegister() {
  return applyDecorators(
    ApiOperation({
      summary: 'Registrar nuevo usuario',
      description: 'Crea un nuevo usuario en el sistema con los datos proporcionados'
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Nombre del usuario',
            example: 'Juan'
          },
          lastname: {
            type: 'string',
            description: 'Apellido del usuario',
            example: 'Pérez'
          },
          document: {
            type: 'string',
            description: 'Número de documento único del usuario',
            example: '1234567890'
          },
          email: {
            type: 'string',
            description: 'Correo electrónico del usuario',
            example: 'juan@example.com'
          },
          password: {
            type: 'string',
            description: 'Contraseña del usuario',
            example: 'password123'
          }
        },
        required: ['name', 'lastname', 'document', 'email', 'password']
      }
    }),
    ApiResponse({
      status: 200,
      description: 'Usuario creado exitosamente',
      schema: {
        example: {
          status: 'Success',
          mensaje: 'Usuario creado con exito',
          user: {
            id_user: 1,
            name: 'Juan',
            lastname: 'Pérez',
            document: '1234567890',
            email: 'juan@example.com',
            status: 'active'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Usuario ya registrado con este documento',
      schema: {
        example: {
          status: 'Error',
          mensaje: 'Usuario ya registrado con este numero de documento'
        }
      }
    })
  );
}
