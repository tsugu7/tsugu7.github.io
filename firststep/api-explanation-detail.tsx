import React from 'react';
import { ArrowRight, ArrowLeft, Lock, Key, Globe, Database, User, Server, FileJson, Code, MessageSquare, FileText } from 'lucide-react';

const APIExplanationDetailed = () => {
  return (
    <div className="flex flex-col gap-8 p-4 bg-gray-50 rounded-lg">
      {/* インターネット通信の基本 */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">1. インターネット通信の基本</h2>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-blue-50">
              <User size={36} className="text-blue-600 mb-2" />
              <div className="text-center font-medium">あなたのデバイス</div>
            </div>
            
            <div className="flex flex-col items-center mx-4">
              <ArrowRight size={24} className="text-green-600 mb-1" />
              <div className="text-xs text-gray-600">リクエスト</div>
              <ArrowLeft size={24} className="text-orange-600 mt-1" />
              <div className="text-xs text-gray-600">レスポンス</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-purple-50">
              <Globe size={36} className="text-purple-600 mb-2" />
              <div className="text-center font-medium">インターネット</div>
            </div>
            
            <div className="flex flex-col items-center mx-4">
              <ArrowRight size={24} className="text-green-600 mb-1" />
              <div className="text-xs text-gray-600">リクエスト</div>
              <ArrowLeft size={24} className="text-orange-600 mt-1" />
              <div className="text-xs text-gray-600">レスポンス</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-green-50">
              <Server size={36} className="text-green-600 mb-2" />
              <div className="text-center font-medium">サービス提供者のサーバー</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            インターネット通信は、あなたのデバイス（スマホ、PC）からサービス提供者のサーバーに「リクエスト」を送り、
            サーバーから「レスポンス」を受け取るやり取りです。これがすべての通信の基本です。
          </div>
        </div>
      </div>

      {/* HTTP メソッド */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">2. HTTPメソッド - APIへの「動詞」</h2>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg bg-green-50">
              <div className="font-bold text-green-700">GET</div>
              <div className="mt-1 text-sm">データを「取得」する</div>
              <div className="mt-2 text-xs bg-white p-2 rounded">
                <code>GET /api/users/123</code>
                <div className="mt-1 text-gray-600">「ID:123のユーザー情報を取得したい」</div>
              </div>
              <div className="mt-2 text-xs text-gray-700">
                例：商品一覧を見る、ユーザープロフィールを表示する
              </div>
            </div>
            
            <div className="p-3 border rounded-lg bg-blue-50">
              <div className="font-bold text-blue-700">POST</div>
              <div className="mt-1 text-sm">新しいデータを「作成」する</div>
              <div className="mt-2 text-xs bg-white p-2 rounded">
                <code>POST /api/users</code>
                <div className="mt-1 text-gray-600">「新しいユーザーを登録したい」</div>
              </div>
              <div className="mt-2 text-xs text-gray-700">
                例：会員登録する、コメントを投稿する、注文を確定する
              </div>
            </div>
            
            <div className="p-3 border rounded-lg bg-amber-50">
              <div className="font-bold text-amber-700">PUT/PATCH</div>
              <div className="mt-1 text-sm">既存データを「更新」する</div>
              <div className="mt-2 text-xs bg-white p-2 rounded">
                <code>PUT /api/users/123</code>
                <div className="mt-1 text-gray-600">「ID:123のユーザー情報を更新したい」</div>
              </div>
              <div className="mt-2 text-xs text-gray-700">
                例：プロフィールを編集する、パスワードを変更する
              </div>
            </div>
            
            <div className="p-3 border rounded-lg bg-red-50">
              <div className="font-bold text-red-700">DELETE</div>
              <div className="mt-1 text-sm">データを「削除」する</div>
              <div className="mt-2 text-xs bg-white p-2 rounded">
                <code>DELETE /api/users/123</code>
                <div className="mt-1 text-gray-600">「ID:123のユーザーを削除したい」</div>
              </div>
              <div className="mt-2 text-xs text-gray-700">
                例：アカウントを削除する、投稿を削除する
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-700">
            HTTPメソッドは、APIに対して何をしたいのかを伝える「動詞」のようなものです。
            レストランで「メニューを見せてください」（GET）、「これを注文します」（POST）、
            「注文を変更したい」（PUT）、「注文をキャンセルします」（DELETE）のように使います。
          </div>
        </div>
      </div>

      {/* ヘッダー */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">3. ヘッダー - 通信の「付箋」</h2>
        <div className="flex flex-col">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <MessageSquare size={24} className="text-blue-600 mr-2 mt-1" />
              <div>
                <div className="font-bold">ヘッダーとは？</div>
                <div className="mt-1 text-sm">
                  リクエストやレスポンスに付ける「付箋」や「メモ」のようなものです。
                  本文とは別に、通信に関する重要な情報を記載します。手紙の封筒に書く宛先や差出人情報のようなものです。
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-100 p-2 font-bold">認証ヘッダー</div>
              <div className="p-3 text-sm">
                <code className="bg-gray-100 p-1 rounded">Authorization: Bearer abc123xyz</code>
                <div className="mt-2 text-gray-700">
                  「私はこのトークンを持っています」という身分証明書のようなもの。
                  APIにアクセスする許可があることを証明します。
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-blue-100 p-2 font-bold">コンテントタイプヘッダー</div>
              <div className="p-3 text-sm">
                <code className="bg-gray-100 p-1 rounded">Content-Type: application/json</code>
                <div className="mt-2 text-gray-700">
                  「このデータはJSON形式です」というラベルのようなもの。
                  送信するデータの形式を指定します。
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-purple-100 p-2 font-bold">アクセプトヘッダー</div>
              <div className="p-3 text-sm">
                <code className="bg-gray-100 p-1 rounded">Accept: application/json</code>
                <div className="mt-2 text-gray-700">
                  「JSONで返答してください」という要望のようなもの。
                  レスポンスとして受け取りたいデータ形式を指定します。
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-amber-100 p-2 font-bold">その他のヘッダー</div>
              <div className="p-3 text-sm">
                <code className="bg-gray-100 p-1 rounded">User-Agent: Mozilla/5.0 ...</code>
                <div className="mt-2 text-gray-700">
                  「私はiPhoneのSafariを使っています」のように、
                  ブラウザや端末の情報などを伝えます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">4. JSON - データの「整理箱」</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-start mb-3">
              <FileJson size={24} className="text-amber-600 mr-2 mt-1" />
              <div>
                <div className="font-bold">JSONとは？</div>
                <div className="text-sm">
                  JavaScript Object Notationの略で、データを整理して表現するための形式です。
                  整理整頓された引き出しのように、情報がわかりやすく構造化されています。
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-3 rounded-lg text-sm">
              <div className="font-bold mb-1">JSONの特徴</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>人間にも読みやすく、コンピュータも理解しやすい</li>
                <li>「キー」と「値」のペアでデータを表現</li>
                <li>階層構造を表現できる（入れ子にできる）</li>
                <li>配列（リスト）を含めることができる</li>
                <li>APIでのデータのやり取りに広く使われている</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="font-bold mb-2">JSON例: ユーザー情報</div>
            <div className="bg-gray-100 p-3 rounded font-mono text-sm">
              {`{
  "id": 123,
  "name": "田中太郎",
  "email": "tanaka@example.com",
  "age": 30,
  "address": {
    "prefecture": "東京都",
    "city": "渋谷区"
  },
  "hobbies": [
    "読書",
    "サイクリング",
    "料理"
  ],
  "active": true
}`}
            </div>
            <div className="mt-3 text-xs text-gray-600">
              <div>・文字列は " " で囲む（例："田中太郎"）</div>
              <div>・数値はそのまま記述（例：30）</div>
              <div>・オブジェクト（入れ子）は { } で囲む</div>
              <div>・配列（リスト）は [ ] で囲む</div>
              <div>・真偽値は true / false</div>
            </div>
          </div>
        </div>
      </div>

      {/* ステータスコード */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">5. ステータスコード - APIからの「応答状態」</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-green-100 p-2 font-bold text-green-800">2xx - 成功</div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold">200 OK</div>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">最も一般的</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">リクエストが成功しました</div>
              
              <div className="font-bold mt-3">201 Created</div>
              <div className="text-sm text-gray-700">新しいリソースが作成されました</div>
              
              <div className="font-bold mt-3">204 No Content</div>
              <div className="text-sm text-gray-700">成功したが返すコンテンツはありません</div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-amber-100 p-2 font-bold text-amber-800">4xx - クライアントエラー</div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold">400 Bad Request</div>
                <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded">よくある</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">リクエストの形式が間違っています</div>
              
              <div className="font-bold mt-3">401 Unauthorized</div>
              <div className="text-sm text-gray-700">認証が必要です</div>
              
              <div className="font-bold mt-3">404 Not Found</div>
              <div className="text-sm text-gray-700">リソースが見つかりません</div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-red-100 p-2 font-bold text-red-800">5xx - サーバーエラー</div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="font-bold">500 Internal Server Error</div>
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">一般的</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">サーバー内部でエラーが発生しました</div>
              
              <div className="font-bold mt-3">503 Service Unavailable</div>
              <div className="text-sm text-gray-700">サービスが一時的に利用できません</div>
              
              <div className="font-bold mt-3">504 Gateway Timeout</div>
              <div className="text-sm text-gray-700">サーバーの応答に時間がかかりすぎています</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-3 rounded">
          ステータスコードは、APIからの「応答状態」を示す3桁の数字です。レストランでの返答に例えると、
          「はい、ご注文を承りました」（200）、「申し訳ありません、そのメニューは品切れです」（404）、
          「申し訳ありません、厨房が火事になってしまいました」（500）のようなものです。
        </div>
      </div>

      {/* APIリクエスト/レスポンスの実例 */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">6. APIリクエスト/レスポンスの実例</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 border rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-2 font-bold">リクエスト例</div>
            <div className="p-3">
              <div className="text-sm font-bold mb-2">HTTPメソッドとURL</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                GET https://weather.example.com/api/forecast/tokyo
              </div>
              
              <div className="text-sm font-bold mt-4 mb-2">ヘッダー</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                Authorization: Bearer abc123xyz<br />
                Accept: application/json
              </div>
              
              <div className="text-sm font-bold mt-4 mb-2">リクエストボディ（GETでは不要）</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono text-gray-500 italic">
                なし
              </div>
              
              <div className="mt-4 bg-blue-50 p-2 rounded text-sm">
                <div className="font-bold">日本語訳：</div>
                「東京の天気予報をJSON形式で教えてください。認証トークンはabc123xyzです。」
              </div>
            </div>
          </div>
          
          <div className="flex-1 border rounded-lg overflow-hidden">
            <div className="bg-green-100 p-2 font-bold">レスポンス例</div>
            <div className="p-3">
              <div className="text-sm font-bold mb-2">ステータスコード</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                200 OK
              </div>
              
              <div className="text-sm font-bold mt-4 mb-2">レスポンスヘッダー</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                Content-Type: application/json<br />
                Cache-Control: max-age=3600
              </div>
              
              <div className="text-sm font-bold mt-4 mb-2">レスポンスボディ（JSON）</div>
              <div className="bg-gray-100 p-2 rounded text-sm font-mono">
                {`{
  "location": "Tokyo",
  "current": {
    "temp": 25,
    "weather": "Sunny",
    "humidity": 40
  },
  "forecast": [
    { "day": "Monday", "temp": 25, "weather": "Sunny" },
    { "day": "Tuesday", "temp": 23, "weather": "Cloudy" }
  ],
  "updated_at": "2025-05-11T10:00:00Z"
}`}
              </div>
              
              <div className="mt-4 bg-green-50 p-2 rounded text-sm">
                <div className="font-bold">日本語訳：</div>
                「東京の現在の天気は25度、晴れ、湿度40%です。月曜は25度で晴れ、火曜は23度で曇りの予報です。」
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API利用の全体図 */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-3 text-blue-700">7. API利用の全体図</h2>
        <div className="relative overflow-x-auto">
          <div className="grid grid-cols-5 gap-1 bg-white p-3 rounded">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                <User size={32} className="text-blue-600" />
              </div>
              <div className="font-bold">あなたのアプリ</div>
              <div className="text-xs mt-1 text-gray-600">API利用者</div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-1 bg-gray-300 my-3"></div>
              <div className="text-center text-xs">
                <div>HTTPリクエスト</div>
                <div className="font-mono mt-1 bg-gray-100 p-1 rounded text-xxs">
                  GET /api/data<br />
                  Authorization: Bearer token
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-2">
                <Code size={32} className="text-yellow-600" />
              </div>
              <div className="font-bold">API</div>
              <div className="text-xs mt-1 text-gray-600">受付・処理・応答</div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-1 bg-gray-300 my-3"></div>
              <div className="text-center text-xs">
                <div>HTTPレスポンス</div>
                <div className="font-mono mt-1 bg-gray-100 p-1 rounded text-xxs">
                  200 OK<br />
                  Content-Type: application/json
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-2">
                <FileJson size={32} className="text-blue-600" />
              </div>
              <div className="font-bold">JSONデータ</div>
              <div className="text-xs mt-1 text-gray-600">整形されたデータ</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded text-sm">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-bold">認証の準備:</span> APIを利用するためのAPIキーやトークンを取得します。これは「会員証」のようなものです。
              </li>
              <li>
                <span className="font-bold">リクエストの送信:</span> HTTPメソッド（GET/POST/等）を使い、必要なヘッダー（認証情報など）を付けて特定のURL（エンドポイント）にリクエストを送ります。
              </li>
              <li>
                <span className="font-bold">サーバー側の処理:</span> APIサーバーがリクエストを受け取り、認証を確認し、要求された処理を実行します。
              </li>
              <li>
                <span className="font-bold">レスポンスの返送:</span> 処理結果をステータスコード（200/404/等）とともに、JSON形式などでデータを返します。
              </li>
              <li>
                <span className="font-bold">データの利用:</span> 返ってきたデータをアプリで表示したり、次の処理に使ったりします。
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIExplanationDetailed;