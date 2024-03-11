import {
  AccountReadModel,
  ArticleCommandModel,
  ArticleReadModel,
  UserProfileJson
} from '../db/model'

export interface IArticleDriver {
  save: (article: ArticleCommandModel) => Promise<string>
  findByAuthor: (authorId: string) => Promise<ArticleReadModel[]>
}

export interface IAccountDriver {
  updateName: (id: string, name: string) => Promise<string>
  findByEmail: (email: string) => Promise<AccountReadModel | null>
}

export interface IUserDriver {
  fetchProfileByName: (userName: string) => Promise<UserProfileJson | null>
}
