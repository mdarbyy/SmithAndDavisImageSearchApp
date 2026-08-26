class StockNumberImporter
  def initialize(file)
    @file = file
  end

  def call
    spreadsheet = Roo::Excelx.new(@file.path)

    sheet = spreadsheet.sheet(0)

    headers = sheet.row(1)

    item_color_index = headers.index("Item_Color")

    raise "Item_Color column not found" unless item_color_index

    stock_numbers = []

    (2..sheet.last_row).each do |row_number|
      stock_number = sheet.row(row_number)[item_color_index]

      next if stock_number.blank?

      stock_numbers << stock_number.to_s.strip
    end

    stock_numbers.uniq
  end
end