# Babel in browser

- compile with **babel** `npx babel src -d js`
- auto-compile with **webpack** `npx webpack --mode development --watch`
- webpack သည် node, react library များမှ code တွေကို သာမာန် web development html, javascript တွေမှာ run လို့ရအောင် compile လုပ်ပေးသော နည်းပညာဖြစ်သည်။
- webpack dev server ကိုသုံးပြီး live edited code ကို brower ပေါ်မှာ refresh လုပ်စရာမလိုပဲ render လာပြ
- `npx webpack-dev-server --mode development --open --hot` နှင့် run နိုင်ပါသည်