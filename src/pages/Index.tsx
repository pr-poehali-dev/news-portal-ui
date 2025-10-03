import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Революция в квантовых вычислениях: новый прорыв',
    description: 'Ученые создали квантовый процессор нового поколения, способный решать сложнейшие задачи за секунды.',
    category: 'Технологии',
    date: '15 октября 2024',
    image: '/img/458aab34-4628-46b5-907b-692de0fb443f.jpg'
  },
  {
    id: 2,
    title: 'Открыта новая экзопланета с признаками жизни',
    description: 'Телескоп Джеймса Уэбба обнаружил планету в обитаемой зоне с атмосферой, содержащей кислород.',
    category: 'Наука',
    date: '14 октября 2024',
    image: '/img/e9144638-b8a9-46e3-b17d-cdf5bd4258c4.jpg'
  },
  {
    id: 3,
    title: 'Стартапы меняют мировую экономику',
    description: 'Инновационные технологические компании привлекли рекордные $200 млрд инвестиций в этом году.',
    category: 'Бизнес',
    date: '13 октября 2024',
    image: '/img/afeab549-e9f6-4155-ae49-7e8e25f1bff0.jpg'
  },
  {
    id: 4,
    title: 'ИИ-художники побеждают на международном конкурсе',
    description: 'Искусственный интеллект создал картины, получившие высшие оценки от критиков современного искусства.',
    category: 'Культура',
    date: '12 октября 2024',
    image: '/img/458aab34-4628-46b5-907b-692de0fb443f.jpg'
  },
  {
    id: 5,
    title: 'Марс готовится принять первых колонистов',
    description: 'SpaceX объявила о завершении строительства первого модуля марсианской станции.',
    category: 'Планеты',
    date: '11 октября 2024',
    image: '/img/e9144638-b8a9-46e3-b17d-cdf5bd4258c4.jpg'
  },
  {
    id: 6,
    title: 'Карта ночного неба обновлена с новыми звездами',
    description: 'Астрономы добавили 50 000 новых объектов в каталог наблюдаемых космических тел.',
    category: 'Карта ночного неба',
    date: '10 октября 2024',
    image: '/img/e9144638-b8a9-46e3-b17d-cdf5bd4258c4.jpg'
  }
];

const menuItems = [
  'Главная',
  'Технологии',
  'Бизнес',
  'Наука',
  'Культура',
  'Карта ночного неба',
  'Планеты',
  'О нас',
  'Контакты'
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                <Icon name="Newspaper" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NewsPortal
              </h1>
            </div>

            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <Button className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-lg hover:text-primary transition-colors py-2 border-b border-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Разделы
              </h2>
              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 flex items-center gap-3"
                  >
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-3 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Последние новости
              </h2>
              <p className="text-gray-600 text-lg">
                Оставайтесь в курсе самых важных событий в мире технологий, науки и культуры
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                      <Icon name="Calendar" size={16} />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:border-0 transition-all duration-300"
                    >
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <footer className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                  <Icon name="Newspaper" className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold">NewsPortal</h3>
              </div>
              <p className="text-gray-400">
                Ваш источник актуальных новостей о технологиях, науке и культуре
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наука</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Культура</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@newsportal.ru" className="hover:text-white transition-colors">
                    info@newsportal.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NewsPortal. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;