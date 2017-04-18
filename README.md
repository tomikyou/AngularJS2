
Execute the following commands to run the sample. A browser window pops up with http:\\\\localhost:3000 address.

```
npm install
npm start
```

# 命名規則
■ファイル名
　ファイル名はすべて小文字で大文字を使わないこと
　
・モデル
 名前の後ろに「.model.ts」を付ける。
　例：
　authenticate.model.ts   

・サービス
 名前の後ろに「.service.ts」を付ける。
　例：
　login.service.ts    

・コンポーネント
 名前の後ろに「.component.ts」を付ける。
　例：
　login.component.ts

■モジュール
　モジュール名はPascalCase記法 を採用する。
　　 先頭を大文字
　　 先頭文字に数字は使えない
     言葉の区切りは大文字
　   大文字と小文字は区別される

・モデル
  名前の後ろに「Model」を付ける。
　例：
　  export interface AuthenticateModel

・サービス
  名前の後ろに「Service」を付ける。
　例：
　 export class LoginService

・コンポーネント
  名前の後ろに「Component」を付ける。
　例：
　  export class LoginComponent

■メソッド名
　・メソッド名はcamelCase記法 を採用する。
　　　先頭を小文字
      先頭文字に数字は使えない
　　　以降も小文字
　　　言葉の区切りは大文字
　    大文字と小文字は区別される
   例：
　　　login(...);

　 ・イベント処理メソッドはprefixとして「on」を付ける
　　例：
　　　onLogin(...)
# コンポーネントの分割
・login　ログイン画面

・tree-nav　メイン画面のツリーナビゲーター

・user-list　メイン画面のユーザーリスト

・group-list　メイン画面のグループリスト

・user　ユーザー登録・編集画面

・group　グループ登録・編集画面

・import　メイン画面のインポート処理

・export　メイン画面のエクスポート処理


# ディレクトリ構造
root                                                
 ├──app                                             
     ├──models                                モデル                                  
     |    ├── authenticate.model.ts           認証結果                     
     |    ├── treenav.model.ts                ツリーデータ               
     |    ├── entries.model.ts                ユーザー/グループ リストデータ                                  
     |    ├── entry.model.ts                  ユーザー/グループ データ                                  
     |    ├── ioformat.model.ts               インポート/エクスポートフォーマットデータ                                  
     |  
     ├──rsn                   　　　　　　　  アプリケーション共通                                  
     |    ├── rsn.component.ts                アプリケーション画面遷移コントロール                                  
     |    ├── rsn.component.html              画面遷移用テンプレート                                  
     | 
     ├──login                  　　　　　　　　　                                  
     |    ├── login.component.ts              ログイン画面コントロール                                  
     |    ├── login.component.html            ログイン画面用テンプレート                                  
     |    ├── login.service.ts                ログイン画面ロジック                                  
     | 
     ├───treenav　　　　　　　　　　　　　　　　　　　　                                      
     |    ├── tree.navigator.component.ts     ツリーナビゲーターコントロール                                         
     |    ├── tree.navigator.component.html   ツリーナビゲーター用テンプレート              
     |    ├── tree.navigator.service.ts       ツリーナビゲーターロジック    
     | 
     ├───userlist　　　　　　　　　　　　　　　　　　　　    
     |    ├── user-list.component.ts          ユーザーリストコントロール       
     |    ├── user-list.component.html        ユーザーリスト用テンプレート              
     |    ├── user-list.service.ts            ユーザーリストロジック                                      
     | 
     ├───grouplist　　　　　　　　　　　　　　　　　　　　    
     |    ├── group-list.component.ts         グループリストコントロール       
     |    ├── group-list.component.html       グループリスト用テンプレート              
     |    ├── group-list.service.ts           グループリストロジック    
     | 
     ├───user　　　　　　　　　　　　　　　　*ダイアログの場合は、userlistの一部になる                                  
     |    ├── user.component.ts               ユーザー登録/編集コントロール       
     |    ├── user.component.html             ユーザー登録/編集用テンプレート              
     |    ├── user.service.ts                 ユーザー登録/編集ロジック                                      
     | 
     ├───group　　　　　　　　　　　　　　　 *ダイアログの場合は、grouplistの一部になる                                  
     |    ├── group.component.ts              グループ登録/編集コントロール                                         
     |    ├── group.component.html            グループ登録/編集用テンプレート                                                
     |    ├── group.service.ts                グループ登録/編集ロジック                                                    
     | 
     ├───import　　　　　　　　　　　　　　　　　　　　                                      
     |    ├── import.component.ts             インポートコントロール                                         
     |    ├── import.component.html        　　 インポート用テンプレート                                                
     |    ├── import.service.ts               インポートロジック                                             
     | 
     ├───export　　　　　　　　　　　　　　　　　　　　                                      
     |    ├── export.component.ts             エクスポートコントロール                                         
     |    ├── export.component.html        　　 エクスポート用テンプレート                                                
     |    ├── export.service.ts               エクスポートロジック                                             
     | 
     ├───rsnservices                         共通サービス                                  
     |    ├── auth.service.ts                 認証チェック用サービス                                       
     |    ├── event-lisner.service.ts         コンポーネント間通信サポート用サービス                                                
     |    ├── rsn-resource.service.ts         サーバー通信サポート用サービス                                             
     |    ├── base64.service.ts        　      Base64エンコードユーティリティ                                             
     |    ├── client-log.service.ts           クライアントログ用サービス           
     |    ├── i18n.service.ts                 多言語対応用サービス                                             
     |    ├── error-handle.service.ts         エラー処理サポート用サービス                                  
     |    ├── cursor-style.service.ts         カーソル制御用サービス                                  
     |    ├── server-ping.service.ts          定期的にサーバー存在チェックサービス                                  
     | 
     ├───resources　　　　　　　　　　　　　            rsnとvendorを分けるべきか                                  
     |    ├── css                                  
     |    ├── data        　                                
     |    ├── fonts                                      
     |    ├── icons        　                             
     |    ├── images                                      
     |    ├── i18n                                  
     |       ├──RsnMessages-jp.json            画面ラベル、表示メッセージ                                  
     | 
     ├─boot.ts　　　　　　　　　　　　　                アプリケーション起動                                  
 ├───index.html　　　　　　　　　　　　　               アプリケーション起動                                  
 | 
 ├───systemjs.config.js(webpack.config.js)   アプリケーション起動用(->Webpack?)                                  
 |  　
 ├───node-modules                            外部依存(npm install)                                  
 |        ├── ...                                       
 |                                   
 ├───typings                                 外部依存(npm install)                                                                    
 |        ├── ...                                       
 |                                   
 ├───.typingsrc                              プロキシ認証対策ファイル(開発用)                                  
 |                                   
 ├───package.json                            外部依存設定ファイル(開発用)                                  
 | 
 ├───tsconfig.json                           TypeScript設定ファイル(開発用)                                  
 | 
 ├───typings.json                            ?設定ファイル(開発用)                                  
