# Learn Redis
- Home Page: https://redis.io/
- Install for Window: https://github.com/microsoftarchive/redis/releases
- Redis Commander: Redis web management tool written in node.js - https://www.npmjs.com/package/redis-commander

>> Scripts Redis Commander
- Install on Global: npm install -g redis-commander 
- Install on Local Project: npm install redis-commander 

Start Redis web management tool: npx redis-commander

>> Script for Redis CLI
- Switch to Redis CLI on CMD use command: redis-cli
- Note: make sure add directory folder of redis to Variables of System

>> Redis Basic

$ redis-cli
127.0.0.1:6379> ping
PONG
127.0.0.1:6379> set myKey "This is a String"
OK
127.0.0.1:6379> get myKey
"This is a String"

- getrange : dùng để tìm kiếm từ vị trí nào đến vị trí nào, -1 được hiểu là vị trí cuối cùng
> 127.0.0.1:6379> getrange myKey 0 -1  
> "This is a String"
> 127.0.0.1:6379> getrange myKey 0 3
> "This"
> 127.0.0.1:6379> getrange myKey -3 -1
> "ing"

<!--- mset : dùng để set cùng lúc nhiều keys -->
127.0.0.1:6379> mset key1 "value1" key2 "value2"
OK

<!--- mget : dùng để lấy cùng lúc nhiều keys -->
127.0.0.1:6379> mget key1 key2
1) "value1"     
2) "value2"   

<!--- strlen : dùng để đếm độ dài giá trị lưu trong một key -->
127.0.0.1:6379> strlen key1
(integer) 6 

<!--- incr : Redis có tính Atom (nguyên tử) nên có thể trực tiếp tăng giá trị một biến số của key thông qua từ khóa incr -->
127.0.0.1:6379> set count 1
OK
127.0.0.1:6379> get count
"1"
127.0.0.1:6379> incr count
(integer) 2  
127.0.0.1:6379> incr count
(integer) 3  

<!--- incrby : tăng theo giá trị tùy ý -->
127.0.0.1:6379> incrby count 10
(integer) 13    

<!--- decr : giảm một -->
127.0.0.1:6379> decr count
(integer) 12    
127.0.0.1:6379> decr count
(integer) 11

<!--- decrby : giảm tùy ý -->
127.0.0.1:6379> decrby count 2
(integer) 9    

<!--- Set một key có thời gian hết hạn -->
127.0.0.1:6379> set key "gia tri nay se het han"
OK
127.0.0.1:6379> get key
"gia tri nay se het han"
<!--- expire : set thời gian hết hạn của một key -->
127.0.0.1:6379> expire key 20
(integer) 1     
<!--- ttl : xem còn bao nhiêu giây key sẽ hết hạn -->
127.0.0.1:6379> ttl key
(integer) 13    
127.0.0.1:6379> ttl key
(integer) 11   
127.0.0.1:6379> get key
(nil) // khi hết hạn key sẽ là nil và biến mất

<!--- keys * : dùng để kiểm tra tất cả key hiện đang lưu trong redis của máy -->
127.0.0.1:6379> keys *
1) "key1"       
2) "myKey"      
3) "count"      
4) "key2"       


