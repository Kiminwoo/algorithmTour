select * from PLACES where HOST_ID IN

                           (
                               SELECT
                                   HOST_ID
                               FROM PLACES
                               GROUP BY HOST_ID HAVING count(HOST_ID) >= 2
                           )