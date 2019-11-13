<?php

   class PDOBaseConnector
   {   
       private $db_host; // Ubicación del servidor de  base de datos
       private $db_user; // Usuario de base de datos;
       private $db_pass; // Contraseña del usuario de base de datos
       private $driver; // Motor de base de datos - mysql, ETC ....
       private $db_name; // Nombre del SCHEMA de base de datos a conectar
       private $message; // Mensaje de Error
       private $rows; // resulset de registros
       private $statement; // Statement para el manejo seguro de consultas
       private $status; // validar el estado de respuesta de la operación --> 1 OK 
                        // Solo se utilizará para operaciones Insert, SELECT, DELETE

       /*
        * Establecer datos de conexión al motor de base de datos
        */
       public function setConnectionData($host, $user, $pass,$driver,$schema)
       {

         $this->db_host = $host;
         $this->db_user = $user;
         $this->db_pass = $pass;
         $this->driver = $driver;
         $this->db_name = $schema;
   
       }
      
       /*
        * obtener status operación
        */
       public function getStatus()
       {
          return $this->status;
          
       }


       /*
        * Establecer conexión
        */

        public function connect()
       {

         try{

           $this->connection = new PDO($this->driver.':host='.$this->db_host.';dbname='.$this->db_name,$this->db_user,$this->db_pass);  
         
           $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

           $this->connection->exec('SET NAMES "utf8"'); // Establecer Charset UTF-8 para conexión

         }catch (PDOException $e) {

           $this->message = $e->getMessage(); //obtener mensaje de error
         }


       }

       /*
        * cerrar conexión
        */

        public function disconnect()
       {
          $this->connection = null; // setear a nulo la conexión

       }

       /*
        * Ejecutar sentencias sql
        * siempre usar bind parametros
        * Ejemplo:
        *  $object->executeQuery("SELECT * FROM usuarios WHERE usuario = :usuario",
                                  array(':usuario' => $value));
        */

       public function executeQuery($query,$params = array())
       {
             
             $this->rows = array();

             $this->status = 0;

             $this->connect();
             
             $this->statement = $this->connection->prepare($query);  

             foreach ($params as $argument => $value) {
               
                $this->statement->bindValue($argument,$value); 
             }

            
                 
              /*Se desean obtener registros*/
              if((strpos($query, 'SELECT') !== false) || (strpos($query, 'select') !== false))
              {

               $this->statement->execute();

              //Almacenar resultados de la consulta
              while($this->rows[] = $this->statement->fetch(PDO::FETCH_ASSOC));

              }
              else
              {

                try
                {

                   $this->statement->execute();

                   $this->status = ($this->statement->rowCount() > 0) ? 1 : 0;
                   


                }
                catch(PDOException $e)
                {
                  $this->status = 0;
                

                }
               

              }
   
              $this->disconnect();

              return $this->rows;

       }

      
   }
   

?>