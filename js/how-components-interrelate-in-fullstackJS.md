# How the Components Interrelate

```
                MongoDB ( database )
                stores long term data.

                         |
                         V

               Express + Node ( server )
               reads and writes from the
               database; serves content

                         |
                         V

                    React ( view )
                 requests data through
                server APIs; Bootstraps
                   server-generated
                        markup
```
